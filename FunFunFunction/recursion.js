let cat = [
  { id: "animaux", parents: null },
  { id: "mammifères", parents: "animaux" },
  { id: "marsupiaux", parents: "animaux" },
  { id: "chats", parents: "mammifères" },
  { id: "chiens", parents: "mammifères" },
  { id: "chihuahua", parents: "chiens" },
  { id: "labrador", parents: "chiens" },
  { id: "persans", parents: "chats" },
  { id: "siamois", parents: "chats" },
  { id: "kangourous", parents: "marsupiaux" },
  { id: "koala", parents: "marsupiaux" },
];
let makeTree = (cat, parent) => {
  let tableau = {};
  cat
    .filter((c) => c.parents === parent)
    .forEach((c) => {
        tableau[c.id] = makeTree(cat, c.id);
    });
    console.log(tableau)
    return tableau;
};

console.log(JSON.stringify(makeTree(cat, null)));
