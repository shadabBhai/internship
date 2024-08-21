const fetchData = async () => {
  const API =
    "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json";

  try {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    sideBar(data.tasks[0].assets);
    console.log(data.tasks[0].assets);
  } catch (error) {
    console.error("Error:", error);
  }
};
const sideBar = (data) => {
  data.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element.asset_title;
    document.querySelector(".side-bar-list").appendChild(li);
  });
};

fetchData();
