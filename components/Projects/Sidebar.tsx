import css from "./Projects.module.css";

interface Props {
  active: string;
  setActive: (category: string) => void;
}

export default function Sidebar({ active, setActive }: Props) {
  const categories = [
    { name: "All", value: "all" },
    { name: "HTML/CSS", value: "htmlcss" },
    { name: "JavaScript", value: "javascript" },
    { name: "React/Next", value: "reactnext" },
  ];

  return (
    <div className={css.sidebar}>
      <h3>Categories</h3>

      <ul>
        {categories.map((cat) => (
          <li
            key={cat.value}
            className={active === cat.value ? css.active : ""}
            onClick={() => setActive(cat.value)}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
