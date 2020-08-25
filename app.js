let material = " ";
let fz = 0;
let vs = 0;
let dc = 0;
let z = 0;
let n = 0;
let vf = 0;

// set frez HSS fz = 0.2 or VHM fz = 0.02
document.getElementById("frez").addEventListener("change", (e) => {
  const input = document.getElementById("fz");
  fz = parseFloat(e.target.value);
  input.value = fz;
});

// set material
document.getElementById("material").addEventListener("change", (e) => {
  material = e.target.value;
});
// set dc in mm
document.getElementById("dc").addEventListener("change", (e) => {
  dc = e.target.value;
  parseInt(dc);
});
// set teeths in pieces
document.getElementById("z").addEventListener("change", (e) => {
  z = e.target.value;
  parseInt(z);
});
// read vs from material
const setVsFromMaterial = () => {
  const input = document.getElementById("vs");
  if (material === "miekkie" && fz === 0.2) {
    vs = 3600;
  } else if (material === "miekkie" && fz === 0.02) {
    vs = 5400;
  } else if (material === "sklejka" && fz === 0.2) {
    vs = 3000;
  } else if (material === "sklejka" && fz === 0.02) {
    vs = 4800;
  } else if (material === "wiorowe" && fz === 0.2) {
    vs = 3600;
  } else if (material === "wiorowe" && fz === 0.02) {
    vs = 4800;
  } else if (material === "plesniowe" && fz === 0.2) {
    vs = 1800;
  } else if (material === "plesniowe" && fz === 0.02) {
    vs = 3000;
  } else if (material === "alumczysty" && fz === 0.2) {
    vs = 300;
  } else if (material === "alumczysty" && fz === 0.02) {
    vs = 400;
  } else if (material === "alumstop" && fz === 0.2) {
    vs = 250;
  } else if (material === "alumstop" && fz === 0.02) {
    vs = 350;
  }
  input.value = vs;
};
// read fz from frez
// calculate n (vs*1000) / (3.14*dc)
const calculateN = () => {
  n = (vs * 1000) / (3.14 * dc);
  n = n.toFixed(1);
  document.getElementById("n").value = n;
};
// calculate vf (fz*z*n)
const calculateVf = () => {
  vf = fz * z * n;
  vf = vf.toFixed(1);
  document.getElementById("vf").value = vf;
};

// final count
document.getElementById("count").addEventListener("click", () => {
  setVsFromMaterial();
  calculateN();
  calculateVf();
  console.log(`fz = ${fz}
    material = ${material}
    dc = ${dc}
    vs = ${vs}
    z = ${z}
    n = ${n}
    vf = ${vf}
    `);
});
// reset
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("frez").reset();
  document.getElementById("material").reset();
  document.querySelectorAll(".input").forEach((input) => {
    input.value = 0;
  });
  fz = 0;
  vs = 0;
  dc = 0;
  z = 0;
  n = 0;
  vf = 0;
});
