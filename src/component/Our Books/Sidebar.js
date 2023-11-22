import Input from "./Input";

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 0,
      title: "التصنيفات",
      inputs: [
        {
          value: "",
          title: "الكل",
        },
        {
          value: "Psychology",
          title: "علم النفس",
        },
        {
          value: "Fantasy",
          title: "خيال",
        },
        {
          value: "Personal Development",
          title: "تطوير الذات",
        },
        {
          value: "Horror",
          title: "رعب",
        },
        {
          value: "Romance",
          title: "رومانسية",
        },
        {
          value: "Novels",
          title: "روايات",
        },
        {
          value: "Kids",
          title: "أطفال",
        },
      ],
      name: "test0",
    },
    {
      id: 1,
      title: "اللغة",
      inputs: [
        {
          value: "",
          title: "الكل",
        },
        {
          value: "Arabic",
          title: "العربية",
        },
        {
          value: "French",
          title: "الفرنسية",
        },
        {
          value: "English",
          title: "الإنجليزية",
        },
      ],
      name: "test1",
    },
    {
      id: 2,
      title: "السعر",
      inputs: [
        {
          value: "",
          title: "الكل",
        },
        {
          value: 1000,
          title: "< 1000 دج",
        },
        {
          value: 2000,
          title: "2000-1000 دج",
        },
        {
          value: 3000,
          title: "3000-2000 دج",
        },
      ],
      name: "test2",
    },
  ];

  return (
    <>
      <div className="sidebar">
        {sidebarItems.map((item, index) => (
          <div className="sidebar-items" key={index}>
            <h2 className="sidebar-title">{item.title} </h2>
            <div className="inputs">
              {item.inputs.map((input, index) => (
                <Input
                  title={input.title}
                  value={input.value}
                  name={item.name}
                  key={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
