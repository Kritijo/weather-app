const iconModules = import.meta.glob("../assets/icons/*.svg", { eager: true });

const iconMap = {};

for (const path in iconModules) {
    const fileName = path.split("/").pop().replace(".svg", "");
    iconMap[fileName] = iconModules[path].default;
}

export default iconMap;
