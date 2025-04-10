
"use client";
import { TextScramble } from "@/components/text-scramble";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Fragment, useState } from "react";

// ========================
// CV Data (English)
// ========================
const CV_DATA = {
  header: {
    name: "VŨ ĐỨC DŨNG",
    contacts: [
      { text: "nthdungvn@gmail.com", href: "mailto:nthdungvn@gmail.com" },
      { text: "github.com/Hayato-shino05", href: "https://github.com/Hayato-shino05" },
      { text: "hayato-shino05.github.io", href: "https://hayato-shino05.github.io" },
      { text: "Hồng Vân - Thường Tín - Hà Nội", href: "#" },
      { text: "0342796576", href: "tel:0342796576" },
    ],
  },
  experience: {
    company: {
      name: "VCOMGROUP",
      role: "POD Content Manager - Freelancer",
      period: "11/2023 — 03/2025",
      projects: [
        {
          // Sửa lại để nêu rõ cả TeePublic & Redbubble
          name: "TeePublic & Redbubble Platforms",
          description:
            "Manage uploads and product listings on TeePublic and Redbubble, ensuring quality displays and compliance with platform regulations.",
          technologies: "Content Management, Team Management",
          responsibilities: [
            "Oversee content implementation on TeePublic, ensuring compliance and engaging product presentations.",
            "Monitor deployments on Redbubble, optimizing visibility and user interaction.",
            "Lead team members in content management, training, and support for expanding product lines across platforms.",
            "Participate in the entire content creation process, from ideation to final product delivery.",
          ],
        },
      ],
    },
    freelance: [
      {
        name: "VI TRI - FOUNDER & DEVELOPER",
        period: "1/10/2024 — Present",
        description: "A.I.-INTEGRATED LEARNING MANAGEMENT SYSTEM",
        technologies: "Python, PHP, HTML, CSS, JavaScript, Docker, Bootstrap, Git",
        responsibilities: [
          "Building and managing the platform",
          "Development and implementation",
          "System administration",
        ],
      },
      {
        name: "VI TRI - FOUNDER & DEVELOPER",
        period: "28/02/2024 — 06/04/2025",
        description: "TÌM KIẾM THÁNH LỄ HÔM NAY",
        technologies: "React Native, Expo, TypeScript, JavaScript, Python, Firebase, Git",
        responsibilities: [
          "Building and managing the platform",
          "Development and implementation",
          "System administration",
        ],
      },
      {
        name: "VI TRI - FOUNDER & DEVELOPER",
        period: "Current",
        description: "CHATBOT AI - CÁ NHÂN HÓA",
        technologies: "Node.js, Git, JavaScript, WebSockets, HTML, CSS",
        responsibilities: [
          "Building and managing the platform",
          "Development and implementation",
          "System administration",
        ],
      },
      {
        name: "VI TRI - DEVELOPER",
        period: "22/02/2025 — 26/02/2025",
        // Sửa lại phần mô tả dự án
        description: "TRANG WEB LƯU KỶ NIỆM VÀ CHÚC MỪNG SINH NHẬT NHÓM BẠN THÂN",
        technologies: "HTML5, CSS3, JavaScript, Vanilla.js, Web Audio API, Canvas API, LocalStorage",
        responsibilities: [
          "Building and managing the platform",
          "Development and implementation",
          "System administration",
        ],
      },
    ],
  },
  skills: [
    { category: "Programming", items: "C, C#, C++, VB.NET#, Python, PHP, HTML, CSS, JavaScript" },
    { category: "Web Development", items: "React Native, Next.js, Firebase, Bootstrap, Tailwind CSS" },
    { category: "Tools", items: "VS Code, Git, Docker, Photoshop, Office Software" },
  ],
  education: {
    school: "Bach Khoa College of Technology",
    degree: "Software Applications",
    period: "08/2023 - 08/2026",
  },
  awards: [
    {
      title: "First Prize",
      date: "5/11/2024",
      description: "University-level IT Student Skills Competition, Information Technology Major 2024",
    },
  ],
  // Đổi sang mô tả sở thích phù hợp với PDF
  hobbies: [
    "Listening to JPOP and reading books",
    "Learning Japanese",
    "Learning Russian",
  ],
  // Đổi để khớp với các hoạt động trong PDF (tiếng Anh)
  activities: [
    {
      title: "Spring Festival",
      period: "22/01/2024 — 09/03/2024",
      organization: "Spring Water Stall",
      description: "Participation in festival stall activities",
    },
    {
      title: "Technical Support",
      period: "03/10/2024 — 05/11/2024",
      organization: "CTECH",
      description: "University-level IT Student Skills Competition",
    },
    {
      title: "Member",
      period: "21/03/2025 — Present",
      organization: "CTECH",
      description: "Participating in the Nursery Program",
    },
    {
      title: "Member",
      period: "27/03/2025 — Present",
      organization: "CTECH",
      description: "Participating in Talkshow 'Nurturing Technology - Building a Digital Future'",
    },
  ],
};

// ========================
// CV Data (Vietnamese)
// ========================
const CV_DATA_VI = {
  header: {
    name: "VŨ ĐỨC DŨNG",
    contacts: CV_DATA.header.contacts, // Giữ nguyên danh sách liên hệ
  },
  experience: {
    company: {
      name: "VCOMGROUP",
      role: "POD Content Manager - Freelancer",
      period: "11/2023 — 03/2025",
      projects: [
        {
          name: "Nền tảng TeePublic & Redbubble",
          description:
            "Quản lý việc tải lên và liệt kê sản phẩm trên TeePublic và Redbubble, đảm bảo chất lượng hiển thị và tuân thủ quy định nền tảng.",
          technologies: "Quản lý nội dung, Quản lý nhóm",
          responsibilities: [
            "Giám sát triển khai nội dung trên TeePublic và Redbubble, tối ưu khả năng hiển thị và trưng bày sản phẩm.",
            "Dẫn dắt đội nhóm trong quản lý nội dung, đào tạo và hỗ trợ mở rộng danh mục trên nhiều nền tảng.",
            "Tham gia trực tiếp vào quá trình sáng tạo nội dung từ ý tưởng đến sản phẩm cuối cùng.",
          ],
        },
      ],
    },
    freelance: [
      {
        name: "VI TRI - FOUNDER & DEVELOPER",
        period: "1/10/2024 — Hiện tại",
        description: "A.I.-INTEGRATED LEARNING MANAGEMENT SYSTEM",
        technologies: "Python, PHP, HTML, CSS, JavaScript, Docker, Bootstrap, Git",
        responsibilities: [
          "Xây dựng và quản trị hệ thống",
          "Phát triển và triển khai",
          "Quản lý hệ thống",
        ],
      },
      {
        name: "VI TRI - FOUNDER & DEVELOPER",
        period: "28/02/2024 — 06/04/2025",
        description: "TÌM KIẾM THÁNH LỄ HÔM NAY",
        technologies: "React Native, Expo, TypeScript, JavaScript, Python, Firebase, Git",
        responsibilities: [
          "Xây dựng và quản trị hệ thống",
          "Phát triển và triển khai",
          "Quản lý hệ thống",
        ],
      },
      {
        name: "VI TRI - FOUNDER & DEVELOPER",
        period: "Hiện tại",
        description: "CHATBOT AI - CÁ NHÂN HÓA",
        technologies: "Node.js, Git, JavaScript, WebSockets, HTML, CSS",
        responsibilities: [
          "Xây dựng và quản trị hệ thống",
          "Phát triển và triển khai",
          "Quản lý hệ thống",
        ],
      },
      {
        name: "VI TRI - DEVELOPER",
        period: "22/02/2025 — 26/02/2025",
        description: "TRANG WEB LƯU KỶ NIỆM VÀ CHÚC MỪNG SINH NHẬT NHÓM BẠN THÂN",
        technologies: "HTML5, CSS3, JavaScript, Vanilla.js, Web Audio API, Canvas API, LocalStorage",
        responsibilities: [
          "Xây dựng và quản trị hệ thống",
          "Phát triển và triển khai",
          "Quản lý hệ thống",
        ],
      },
    ],
  },
  skills: [
    { category: "Lập trình", items: "C, C#, C++, VB.NET#, Python, PHP, HTML, CSS, JavaScript" },
    { category: "Phát triển Web", items: "React Native, Next.js, Firebase, Bootstrap, Tailwind CSS" },
    { category: "Công cụ", items: "VS Code, Git, Docker, Photoshop, Tin học văn phòng" },
  ],
  education: {
    school: "Cao đẳng Kỹ thuật - Công nghệ Bách Khoa",
    degree: "Ứng dụng phần mềm",
    period: "08/2023 - 08/2026",
  },
  awards: [
    {
      title: "Giải Nhất",
      date: "5/11/2024",
      description: "Hội Thi Kỹ Năng Nghề Sinh Viên Cấp Trường Ngành CNTT năm 2024",
    },
  ],
  hobbies: [
    "Nghe nhạc JPOP và đọc sách",
    "Học tiếng Nhật",
    "Học tiếng Nga",
  ],
  activities: [
    {
      title: "Quầy hàng nước Mùa Xuân",
      period: "22/01/2024 — 09/03/2024",
      organization: "Lễ Hội Mùa Xuân",
      description: "Tham gia tổ chức và phục vụ quầy nước",
    },
    {
      title: "Hỗ trợ kỹ thuật",
      period: "03/10/2024 — 05/11/2024",
      organization: "CTECH",
      description: "Hội Thi Kỹ Năng Nghề Sinh Viên Cấp Trường Ngành CNTT",
    },
    {
      title: "Thành viên",
      period: "21/03/2025 — Hiện tại",
      organization: "CTECH",
      description: "Tham gia Vườn Ươm",
    },
    {
      title: "Thành viên",
      period: "27/03/2025 — Hiện tại",
      organization: "CTECH",
      description: "Talkshow Ươm Mầm Công Nghệ - Kiến Tạo Tương Lai Số",
    },
  ],
};

// ===============
// Project Section
// ===============
const ProjectSection = ({
  project,
}: {
  project: (typeof CV_DATA.experience.company.projects)[0];
}) => (
  <div className="mb-4">
    <h4 className="font-semibold">Project: {project.name}</h4>
    <ul className="list-disc ml-4 md:ml-6 space-y-1" role="list">
      <li>
        <span className="font-medium">Description:</span> {project.description}
      </li>
      <li>
        <span className="font-medium">Technologies:</span> {project.technologies}
      </li>
      <li>
        <span className="font-medium">Responsibilities:</span>
        <ul className="list-circle ml-4 md:ml-6" role="list">
          {project.responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      </li>
    </ul>
  </div>
);

// ===============
// Freelance Section
// ===============
const FreelanceSection = ({
  project,
}: {
  project: (typeof CV_DATA.experience.freelance)[0];
}) => (
  <div>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
      <h4 className="font-semibold">Project: {project.name}</h4>
      <span className="text-sm text-muted-foreground">{project.period}</span>
    </div>
    <ul className="list-disc ml-4 md:ml-6 space-y-1" role="list">
      <li>
        <span className="font-medium">Description:</span> {project.description}
      </li>
      <li>
        <span className="font-medium">Technologies:</span> {project.technologies}
      </li>
      <li>
        <span className="font-medium">Responsibilities:</span>
        <ul className="list-circle ml-4 md:ml-6" role="list">
          {project.responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      </li>
    </ul>
  </div>
);

// ===============
// Download PDF
// ===============
const handleDownloadPDF = () => {
  const pdfUrl = "/files/VuDucDung-CV.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Vu Duc Dung - CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// ===============
// Main CV Page
// ===============
export default function CVPage() {
  // Mặc định để false, bạn có thể cài nút chuyển ngôn ngữ nếu muốn
  const [isVietnamese] = useState(false);
  const [triggerScramble, setTriggerScramble] = useState(false);

  // const handleLanguageSwitch = () => {
  //   setTriggerScramble(true);
  //   setIsVietnamese(!isVietnamese);
  // };

  const currentData = isVietnamese ? CV_DATA_VI : CV_DATA;

  return (
    <>
      <article
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8"
        role="main"
      >
        {/* Header */}
        <header className="text-center space-y-4">
          <TextScramble
            as="h1"
            className="text-2xl sm:text-3xl font-bold"
            trigger={triggerScramble}
            onScrambleComplete={() => setTriggerScramble(false)}
          >
            {currentData.header.name}
          </TextScramble>
          <nav
            className="text-sm text-muted-foreground flex flex-wrap justify-center gap-y-2"
            aria-label="Contact information"
          >
            {currentData.header.contacts.map((contact, idx) => (
              <Fragment key={idx}>
                {idx > 0 && (
                  <span className="mx-2" aria-hidden="true">
                    •
                  </span>
                )}
                <a
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary inline-block"
                  aria-label={`Contact via ${contact.text}`}
                >
                  {contact.text}
                </a>
                {idx === 2 && <div className="basis-full hidden sm:block" />}
              </Fragment>
            ))}
          </nav>
        </header>

        {/* Work Experience */}
        <section aria-labelledby="work-experience">
          <h2
            id="work-experience"
            className="text-xl font-bold border-b pb-1 mb-6"
          >
            Work Experience
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="font-bold">{currentData.experience.company.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {currentData.experience.company.period}
                </span>
              </div>
              <div className="italic mb-4">
                {currentData.experience.company.role}
              </div>
              {currentData.experience.company.projects.map((project, idx) => (
                <ProjectSection key={idx} project={project} />
              ))}
            </div>

            {currentData.experience.freelance.map((project, idx) => (
              <FreelanceSection key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills">
          <h2 id="skills" className="text-xl font-bold border-b pb-1 mb-6">
            Skills
          </h2>
          <div className="space-y-3">
            {currentData.skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-1">
                <span className="font-medium min-w-[100px]">
                  {skill.category}:
                </span>
                <span>{skill.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section aria-labelledby="education">
          <h2 id="education" className="text-xl font-bold border-b pb-1 mb-6">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
            <div>
              <h3 className="font-bold">{currentData.education.school}</h3>
              <div className="italic">{currentData.education.degree}</div>
            </div>
            <span className="text-sm text-muted-foreground">
              {currentData.education.period}
            </span>
          </div>
        </section>

        {/* Awards */}
        <section aria-labelledby="awards">
          <h2 id="awards" className="text-xl font-bold border-b pb-1 mb-6">
            Awards
          </h2>
          <div className="space-y-3">
            {currentData.awards.map((award, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-1">
                <span className="font-medium min-w-[100px]">{award.title}:</span>
                <span>
                  {award.date} - {award.description}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies */}
        <section aria-labelledby="hobbies">
          <h2 id="hobbies" className="text-xl font-bold border-b pb-1 mb-6">
            Hobbies
          </h2>
          <div className="space-y-3">
            {currentData.hobbies.map((hobby, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-1">
                <span className="font-medium min-w-[100px]">{hobby}:</span>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section aria-labelledby="activities">
          <h2 id="activities" className="text-xl font-bold border-b pb-1 mb-6">
            Activities
          </h2>
          <div className="space-y-3">
            {currentData.activities.map((activity, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-1">
                <span className="font-medium min-w-[100px]">
                  {activity.title}:
                </span>
                <span>
                  {activity.period} - {activity.organization}
                </span>
                <span className="text-sm text-muted-foreground">
                  {activity.description}
                </span>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* Fixed buttons */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        <Button
          onClick={handleDownloadPDF}
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
        {/* 
        Nếu cần nút chuyển ngôn ngữ, mở comment bên dưới:
        
        <Button
          onClick={handleLanguageSwitch}
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Languages className="mr-2 h-4 w-4" />
          {isVietnamese ? "Switch to English" : "Chuyển sang Tiếng Việt"}
        </Button>
        */}
      </div>
    </>
  );
}
