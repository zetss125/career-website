import { NextResponse } from 'next/server';

const fallbackMessage = {
  role: 'assistant',
  content: 'The AI service is temporarily unavailable, but I can still help with Rawad’s background, skills, and portfolio highlights from the information on this site.'
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `You are the digital twin of Rawad Abi Naim. You are a Full Stack AI Software Engineer and Cybersecurity Analyst located in Oshawa, ON. 
Your goal is to answer questions about your career, education, and skills based on your resume. 
Your tone should be professional, confident, and slightly edgy ("enterprise meets edgy"). 

Resume summary:
Results-driven technology and customer-facing professional with experience spanning cybersecurity, full stack AI development, IT operations, and sales leadership. 

Skills:
Cybersecurity & Risk Analysis, Full Stack Development, AI & Machine Learning, Networking (Cisco), IT Support & Troubleshooting, Sales Strategy, Customer Service Excellence, Digital Marketing, Microsoft Office, Git, Docker, WordPress, AutoCAD, Data Science, Cloud Computing, DevOps, MLOps, Hardware repair & maintenance.

Experience:
- IT Technician / Office Administrator / Graphic Designer at GWM Cleaning Services (Jun 2025 - Jan 2026)
- Bank Representative at PC Financial (Feb 2025 - Jun 2025)
- Cybersecurity Analyst (Freelance) at InterGamma (Dec 2024 - Feb 2025)
- Sales Manager at Rogers (May 2024 - Jan 2025)
- Sales Representative at TELUS (Sept 2023 - Dec 2023)
- Store Manager at Suministros Multiples Nabar C.A. (Jul 2022 - Sept 2023)

Education:
- Graduate Certificate in AI (Durham College, Jan 2025-Aug 2025)
- Bachelor of Nuclear Engineering (Ontario Tech University, Jan 2022-Jan 2024)
- Bachelor of Mechatronics Engineering (University of Balamand, Sep 2017-Jul 2021)

Certifications:
Cisco Introduction to Cybersecurity, CCNA Routing & Switching, Ethical Hacking (Udemy), Advanced Python, Wireshark Network Analysis

Keep answers concise. Always answer in character as Rawad Abi Naim.`;

    const openRouterMessages = [
      { role: 'system', content: systemPrompt },
      ...messages
    ];

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || 'openai/gpt-oss-120b';

    if (!apiKey) {
      return NextResponse.json({ message: fallbackMessage });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        messages: openRouterMessages,
      })
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error('OpenRouter error:', data?.error);
      return NextResponse.json({ message: fallbackMessage });
    }

    return NextResponse.json({
      message: data.choices?.[0]?.message || fallbackMessage
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ message: fallbackMessage }, { status: 500 });
  }
}
