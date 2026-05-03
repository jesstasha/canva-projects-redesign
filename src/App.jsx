import { useState } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Summer Math Printable",
    folder: "Teaching Materials",
    type: "A4 Landscape",
    year: 2026,
    month: "January",
    edited: "2 days ago",
    thumbnail: "🧮",
  },
  {
    id: 2,
    title: "Portfolio Presentation",
    folder: "Career / Portfolio",
    type: "Presentation",
    year: 2026,
    month: "January",
    edited: "3 days ago",
    thumbnail: "✨",
  },
  {
    id: 3,
    title: "Game Design Brief",
    folder: "University Projects",
    type: "Document",
    year: 2025,
    month: "March",
    edited: "20 days ago",
    thumbnail: "🎲",
  },

  {
    id: 6,
    title: "CISSA Website Redesign",
    folder: "University Projects",
    type: "Presentation",
    year: 2025,
    month: "January",
    edited: "4 months ago",
    thumbnail: "💻",
  },
  {
    id: 7,
    title: "Brand Identity Kit",
    folder: "Career / Portfolio",
    type: "A4",
    year: 2025,
    month: "March",
    edited: "5 months ago",
    thumbnail: "🎨",
  },
  {
    id: 8,
    title: "Event Poster Series",
    folder: "Social Media",
    type: "Instagram Post",
    year: 2025,
    month: "June",
    edited: "7 months ago",
    thumbnail: "🎪",
  },
  {
    id: 9,
    title: "UX Research Moodboard",
    folder: "Design Research",
    type: "Moodboard",
    year: 2025,
    month: "September",
    edited: "9 months ago",
    thumbnail: "🔍",
  },
  {
    id: 4,
    title: "Instagram Campaign Draft",
    folder: "Social Media",
    type: "Post",
    year: 2024,
    month: "July",
    edited: "8 months ago",
    thumbnail: "📱",
  },
  {
    id: 5,
    title: "Old UX Moodboard",
    folder: "Design Research",
    type: "Moodboard",
    year: 2023,
    month: "October",
    edited: "2 years ago",
    thumbnail: "🎨",
  },
  {
    id: 10,
    title: "July Brand Refresh",
    folder: "Career / Portfolio",
    type: "Presentation",
    year: 2026,
    month: "July",
    edited: "6 months ago",
    thumbnail: "🎨",
  },
  {
    id: 11,
    title: "July Social Templates",
    folder: "Social Media",
    type: "Instagram Post",
    year: 2026,
    month: "July",
    edited: "6 months ago",
    thumbnail: "📱",
  },
  {
    id: 12,
    title: "July Moodboard",
    folder: "Design Research",
    type: "Moodboard",
    year: 2026,
    month: "July",
    edited: "6 months ago",
    thumbnail: "🔍",
  },
  {
    id: 13,
    title: "July Campaign Deck",
    folder: "Career / Portfolio",
    type: "Presentation",
    year: 2026,
    month: "July",
    edited: "6 months ago",
    thumbnail: "✨",
  },
  {
    id: 14,
    title: "July Portfolio Mockup",
    folder: "Career / Portfolio",
    type: "Website Design",
    year: 2026,
    month: "July",
    edited: "6 months ago",
    thumbnail: "🖥️",
  },
  {
    id: 15,
    title: "Early Canva Layout Study",
    folder: "Design Research",
    type: "Moodboard",
    year: 2022,
    month: "November",
    edited: "4 years ago",
    thumbnail: "📐",
  },
  {
    id: 16,
    title: "First Portfolio Draft",
    folder: "Career / Portfolio",
    type: "Presentation",
    year: 2022,
    month: "August",
    edited: "4 years ago",
    thumbnail: "🌱",
  },
];

function IconRail({ onToggle }) {
  const items = [
    { icon: "＋", label: "Create" },
    { icon: "⌂", label: "Home" },
    { icon: "▣", label: "Projects", active: true },
    { icon: "◫", label: "Templates" },
    { icon: "◉", label: "Brand" },
    { icon: "✦", label: "Canva AI" },
    { icon: "▤", label: "Print Shop" },
    { icon: "•••", label: "More" },
  ];

  return (
    <nav className="iconRail">
      <button className="collapseButton" onClick={onToggle} aria-label="Toggle sidebar">
        ◧
      </button>

      {items.map((item) => (
        <button
          key={item.label}
          className={`railItem ${item.active ? "active" : ""}`}
        >
          <span className="railIcon">{item.icon}</span>
          <span className="railLabel">{item.label}</span>
        </button>
      ))}

      <div className="railBottom">
        <button className="railItem">
          <span className="railIcon">🔔</span>
          <span className="railLabel">Alerts</span>
        </button>

        <button className="profileButton">J</button>
      </div>
    </nav>
  );
}

function ProjectNav() {
  const [showTip, setShowTip] = useState(true);

  return (
    <aside className="projectNav">
      <h1 className="brand">Design Archive</h1>

      <div className="navSection">
        <button className="navItem selected">📁 All projects</button>
        <button className="navItem">🔵 Your projects</button>
        <button className="navItem">👥 Shared with you</button>
        <button className="navItem">✓ Available offline</button>
      </div>

      {showTip && (
        <div className="tipCard">
          <button className="closeTip" onClick={() => setShowTip(false)}>×</button>
          <strong>Star designs and folders</strong>
          <p>
            Star your most important items by selecting the star icon on a design or folder.
          </p>
        </div>
      )}

      <button className="trash">🗑 Trash</button>
    </aside>
  );
}

function Sidebar({ collapsed, onToggle }) {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <IconRail onToggle={onToggle} />
      {!collapsed && <ProjectNav />}
    </div>
  );
}

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [sortBy, setSortBy] = useState("Month");
  const [selectedYear, setSelectedYear] = useState("2026");

  return (
    <div className="app">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

      <main className="mainContent">
        <TopHero />
        <Filters selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
        <FolderPreview />
        <ProjectTable sortBy={sortBy} setSortBy={setSortBy} selectedYear={selectedYear} />
      </main>
    </div>
  );
}

function TopHero() {
  return (
    <section className="hero">
      <div className="heroActions">
        <button className="softButton">✦ Sneak peek</button>
        <button className="trialButton">👑 Start your trial for $0</button>
      </div>

      <h2>All projects</h2>

      <div className="searchBar">
        <span>⌕</span>
        <input placeholder="Search by project, folder, keyword, or year" />
      </div>
    </section>
  );
}

function Filters({ selectedYear, setSelectedYear }) {
  const [openYear, setOpenYear] = useState(false);

  const years = ["2026", "2025", "2024", "2023", "2022"];

  return (
    <div className="filters">
      <button className="clearFilter">×</button>

      <button className="filter active">Designs ▾</button>
      <button className="filter">Category ▾</button>
      <button className="filter">Owner ▾</button>

      <div className="filterDropdown">
        <button
          className={`filter highlight ${openYear ? "opened" : ""}`}
          onClick={() => setOpenYear(!openYear)}
        >
          Year ▾
        </button>

        {openYear && (
          <div className="dropdownMenu">
            <div className="dropdownTitle">Year</div>

            <button className="dropdownItem selected">
              Any year <span>✓</span>
            </button>

            {years.map((year) => (
              <button className={`dropdownItem ${selectedYear === year ? "selected" : ""}`} key={year} onClick={() => { setSelectedYear(year); setOpenYear(false); }}>
                {year}
              </button>
            ))}
          </div>
        )}
      </div>

      <button className="filter">Date modified ▾</button>
    </div>
  );
}

function SortDropdown({ sortBy, setSortBy }) {
  const [openSort, setOpenSort] = useState(false);

  const sortOptions = [
    "Month",
    "Newest edited",
    "Oldest edited",
    "Alphabetical (A-Z)",
    "Alphabetical (Z-A)",
  ];

  return (
    <div className="sortDropdown">
      <button className="sortButton" onClick={() => setOpenSort(!openSort)}>
        ↕
      </button>

      {openSort && (
        <div className="sortMenu">
          <div className="sortTitle">Sort by</div>

          {sortOptions.map((option) => (
            <button
              key={option}
              className={`sortItem ${sortBy === option ? "selected" : ""}`}
              onClick={() => {
                setSortBy(option);
                setOpenSort(false);
              }}
            >
              <span>{option}</span>
              {sortBy === option && <span>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


function editedToDays(edited) {
  const number = parseInt(edited);
  if (edited.includes("day")) return number;
  if (edited.includes("month")) return number * 30;
  if (edited.includes("year")) return number * 365;
  return 0;
}

function ProjectTable({ sortBy, setSortBy, selectedYear }) {
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "Newest edited") {
      return editedToDays(a.edited) - editedToDays(b.edited);
    }

    if (sortBy === "Oldest edited") {
      return editedToDays(b.edited) - editedToDays(a.edited);
    }

    if (sortBy === "Alphabetical (A-Z)") {
      return a.title.localeCompare(b.title);
    }

    if (sortBy === "Alphabetical (Z-A)") {
      return b.title.localeCompare(a.title);
    }

    return 0;
  });

  return (
    <section className="projectArea">
      <div className="viewTools">
        <span></span>
        <div>
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          <button>▦</button>
          <button className="addButton">＋</button>
        </div>
      </div>

      {sortBy === "Month" ? (
        <MonthlyArchive selectedYear={selectedYear} />
      ) : (
        <>
      <div className="tableHeader canvaListHeader">
        <span>Name</span>
        <span>People</span>
        <span>Type</span>
        <span>Edited ↓</span>
        <span></span>
      </div>

      {sortedProjects.map((project) => (
        <div className="projectRow canvaListRow" key={project.id}>
          <div className="projectName">
            <div className="thumb">{project.thumbnail}</div>
            <div>
              <strong>{project.title}</strong>
              <p>{project.year}</p>
            </div>
          </div>

          <span className="peoplePill">🔒 Private</span>
          <span>{project.type}</span>
          <span>{project.edited}</span>

          <div className="rowActions">
            <button>☆</button>
            <button className="moreButton">•••</button>
          </div>
        </div>
      ))}

        </>
      )}
    </section>
  );
}
function MonthlyArchive({ selectedYear }) {
  const [julyStartIndex, setJulyStartIndex] = useState(0);

  const yearNum = parseInt(selectedYear);
  const filteredProjects = projects.filter(p => p.year === yearNum);

  const monthMap = {};
  filteredProjects.forEach(p => {
    if (!monthMap[p.month]) monthMap[p.month] = [];
    monthMap[p.month].push(p);
  });

  const monthGroups = Object.entries(monthMap).map(([month, projects]) => ({
    month,
    projects,
  }));

  function handleJulySlide() {
    const julyProjects = monthGroups.find((group) => group.month === "July").projects;

    if (julyStartIndex + 4 < julyProjects.length) {
      setJulyStartIndex(julyStartIndex + 1);
    } else {
      setJulyStartIndex(0);
    }
  }

  return (
    <>
      {monthGroups.map((group) => {
        const isHeavy = group.projects.length > 4;
        const slideIndex = group.month === "July" ? julyStartIndex : 0;

        return (
          <section className="monthProjectSection" key={group.month}>
            <div className="sectionTitle">
              <h3>{group.month}</h3>
            </div>

            {isHeavy ? (
              <div className="folderSlider">
                <div className="folderWindow">
                  <div
                    className="folderTrack"
                    style={{ transform: `translateX(-${slideIndex * 25}%)` }}
                  >
                    {group.projects.map((project, idx) => (
                      <article className="recentProjectCard" key={idx}>
                        <div className="recentThumb">{project.thumbnail}</div>
                        <strong>{project.title}</strong>
                        <p>• Edited {project.edited}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <button className="sliderArrow" onClick={handleJulySlide}>
                  {julyStartIndex + 4 < group.projects.length ? "›" : "‹"}
                </button>
              </div>
            ) : (
              <div className="projectCardRow">
                {group.projects.map((project, idx) => (
                  <article className="recentProjectCard" key={idx}>
                    <div className="recentThumb">{project.thumbnail}</div>
                    <strong>{project.title}</strong>
                    <p>• Edited {project.edited}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </>
  );
}

function FolderPreview() {
  const allYears = ["2026", "2025", "2024", "2023", "2022", "2021", "2020"];
  const [startIndex, setStartIndex] = useState(0);

  function showNextYears() {
    if (startIndex + 4 < allYears.length) {
      setStartIndex(startIndex + 1);
    }
  }

  function showPreviousYears() {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  }

  return (
    <section className="folderPreview">
      <div className="sectionTitle">
        <h3>Year-based archive</h3>
        <p>Proposed improvement for long-term project retrieval</p>
      </div>

      <div className="folderSlider">
        {startIndex > 0 && (
          <button className="sliderArrow" onClick={showPreviousYears}>
            ‹
          </button>
        )}

        <div className="folderWindow">
          <div
            className="folderTrack"
            style={{ transform: `translateX(-${startIndex * 25}%)` }}
          >
            {allYears.map((year) => (
              <article className="folderCard" key={year}>
                <div className="folderIcon">📂</div>
                <strong>{year} Projects</strong>
                <p>Grouped designs, assets, and related folders</p>
              </article>
            ))}
          </div>
        </div>

        {startIndex + 4 < allYears.length && (
          <button className="sliderArrow right" onClick={showNextYears}>
            ›
          </button>
        )}
      </div>
    </section>
  );
}