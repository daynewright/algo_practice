const paths = [
  {
    path: "app/src/header/header.js",
    contents: `
      <div>HELLO</div>
    `,
  },
  {
    path: "app/src/components/page1/index.js",
    contents: `
    <div>
      <p>YO, DUDE!</p>
    </div>
    `,
  },
  {
    path: "app/src/components/page2/index/js",
    contents: `<span>SOMETHING SPANNNN</span>`,
  },
];

const pathsToFolders = (paths) => {
  const root = { name: "", children: [] };

  let current = root;
  paths.forEach((p) => {
    const folderLevels = p.path.split("/");
    folderLevels.forEach((folderLevelName, i) => {
      let nextNode = current.children.find((c) => c.name === folderLevelName);

      if (!nextNode) {
        nextNode = {
          name: folderLevelName,
          children: [],
        };
      }

      if (i === folderLevels.length - 1) {
        nextNode.contents = folderLevels[i].contents;
      }
      current.children.push(nextNode);
      current = nextNode;
    });
  });

  return root;
};

console.log(JSON.stringify(pathsToFolders(paths)));
