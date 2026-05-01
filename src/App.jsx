import "./App.css";

const projects = [
  {
    id: 1,
    title: "Summer Math Printable",
    folder: "Teaching Materials",
    type: "A4 Landscape",
    year: 2026,
    edited: "2 days ago",
    thumbnail: "🧮",
  },
  {
    id: 2,
    title: "Portfolio Presentation",
    folder: "Career / Portfolio",
    type: "Presentation",
    year: 2026,
    edited: "3 days ago",
    thumbnail: "✨",
  },
  {
    id: 3,
    title: "Game Design Brief",
    folder: "University Projects",
    type: "Document",
    year: 2025,
    edited: "20 days ago",
    thumbnail: "🎲",
  },
  {
    id: 4,
    title: "Instagram Campaign Draft",
    folder: "Social Media",
    type: "Post",
    year: 2024,
    edited: "8 months ago",
    thumbnail: "📱",
  },
  {
    id: 5,
    title: "Old UX Moodboard",
    folder: "Design Research",
    type: "Moodboard",
    year: 2023,
    edited: "2 years ago",
    thumbnail: "🎨",
  },
];

function IconRail() {
  const items = ["＋", "⌂", "▣", "◫", "✦", "•••"];
  return (
    <nav className="iconRail">
      <div className="miniLogo">D</div>
      {items.map((item, index) => (
        <button
          key={item}
          className={`railButton ${index === 2 ? "active" : ""}`}
        >
          {item}
        </button>
      ))}
      <div className="railBottom">
        <button className="railButton">🔔</button>
        <button className="profileButton">J</button>
      </div>
    </nav>
  );
}

function ProjectNav() {
  return (
    <aside className="projectNav">
      <h1 className="brand">Design Archive</h1>

      <div className="navSection">
        <button className="navItem selected">📁 All projects</button>
        <button className="navItem">🔵 Your projects</button>
        <button className="navItem">👥 Shared with you</button>
        <button className="navItem">✓ Available offline</button>
      </div>

      <div className="tipCard">
        <button className="closeTip">×</button>
        <strong>Organise older work</strong>
        <p>
          Group designs by year or folder so past projects are easier to
          retrieve.
        </p>
      </div>

      <button className="trash">🗑 Trash</button>
    </aside>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <IconRail />
      <ProjectNav />
    </div>
  );
}

function TopHero() {
  return (
    <section className="hero">
      <div className="heroActions">
        <button className="softButton">✦ Redesign concept</button>
        <button className="trialButton">Portfolio demo</button>
      </div>

      <h2>All projects</h2>

      <div className="searchBar">
        <span>⌕</span>
        <input placeholder="Search by project, folder, keyword, or year" />
      </div>
    </section>
  );
}

function Filters() {
  return (
    <div className="filters">
      <button className="clearFilter">×</button>
      <button className="filter active">Designs ▾</button>
      <button className="filter">Category ▾</button>
      <button className="filter">Owner ▾</button>
      <button className="filter highlight">Year ▾</button>
      <button className="filter">Date modified ▾</button>
    </div>
  );
}

function ProjectTable() {
  return (
    <section className="projectArea">
      <div className="viewTools">
        <span></span>
        <div>
          <button>↕</button>
          <button>▦</button>
          <button className="addButton">＋</button>
        </div>
      </div>

      <div className="tableHeader">
        <span>Name</span>
        <span>Folder</span>
        <span>Type</span>
        <span>Edited</span>
      </div>

      {projects.map((project) => (
        <div className="projectRow" key={project.id}>
          <div className="projectName">
            <div className="thumb">{project.thumbnail}</div>
            <div>
              <strong>{project.title}</strong>
              <p>{project.year}</p>
            </div>
          </div>
          <span className="folderPill">{project.folder}</span>
          <span>{project.type}</span>
          <span>{project.edited}</span>
        </div>
      ))}
    </section>
  );
}

function FolderPreview() {
  const folders = ["2026", "2025", "2024", "2023"];

  return (
    <section className="folderPreview">
      <div className="sectionTitle">
        <h3>Year-based archive</h3>
        <p>Proposed improvement for long-term project retrieval</p>
      </div>

      <div className="folderGrid">
        {folders.map((year) => (
          <article className="folderCard" key={year}>
            <div className="folderIcon">📂</div>
            <strong>{year} Projects</strong>
            <p>Grouped designs, assets, and related folders</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="mainContent">
        <TopHero />
        <Filters />
        <FolderPreview />
        <ProjectTable />
      </main>
    </div>
  );
}