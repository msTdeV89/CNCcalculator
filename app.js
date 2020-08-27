let material = " ";
let frez = "";
let fz = 0;
let vs = 0;
let dc = 0;
let z = 0;
let n = 0;
let vf = 0;

// set frez HSS fz = 0.2 or VHM fz = 0.02
document.getElementById("frez").addEventListener("change", (e) => {
  frez = e.target.value;
  setVsFromMaterial();
});

// set material
document.getElementById("material").addEventListener("change", (e) => {
  material = e.target.value;
  setVsFromMaterial();
  const input = document.getElementById("vs");
  input.value = vs;
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
  const input2 = document.getElementById("fz");
  if (material === "miekkie" && frez === "hss") {
    vs = 12;
    fz = 0.75;
  } else if (material === "miekkie" && frez === "vhm") {
    vs = 120;
    fz = 0.075;
  } else if (material === "sklejka" && frez === "hss") {
    vs = 11.5;
    fz = 0.45;
  } else if (material === "sklejka" && frez === "vhm") {
    vs = 115;
    fz = 0.045;
  } else if (material === "wiorowe" && frez === "hss") {
    vs = 11;
    fz = 0.35;
  } else if (material === "wiorowe" && frez === "vhm") {
    vs = 110;
    fz = 0.035;
  } else if (material === "pilsniowe" && frez === "hss") {
    vs = 10.5;
    fz = 0.25;
  } else if (material === "pilsniowe" && frez === "vhm") {
    vs = 105;
    fz = 0.025;
  } else if (material === "alumczysty" && frez === "hss") {
    vs = 20;
    fz = 0.33;
  } else if (material === "alumczysty" && frez === "vhm") {
    vs = 120;
    fz = 0.033;
  } else if (material === "alumstop" && frez === "hss") {
    vs = 10;
    fz = 0.15;
  } else if (material === "alumstop" && frez === "vhm") {
    vs = 100;
    fz = 0.015;
  } else if (material === "plastik" && frez === "hss") {
    vs = 10;
    fz = 0.28;
  } else if (material === "plastik" && frez === "vhm") {
    vs = 100;
    fz = 0.028;
  }
  input.value = vs;
  input2.value = fz;
};
// calculate n (vs*1000) / (3.14*dc)
const calculateN = () => {
  n = (vs * 1000) / (3.14 * dc);
  n = n.toFixed();
  document.getElementById("n").value = `${n} RPM`;
};
// calculate vf (fz*z*n)
const calculateVf = () => {
  vf = fz * z * n;
  vf = vf.toFixed();
  document.getElementById("vf").value = `${vf} MM/MIN`;
};

// final count
document.getElementById("count").addEventListener("click", () => {
  inputDC = document.getElementById("dc");
  inputZ = document.getElementById("z");
  if (dc === 0) {
    inputDC.classList.add("emptyInput");
    setTimeout(() => {
      inputDC.classList.remove("emptyInput");
    }, 2000);
  } else if (z === 0) {
    inputZ.classList.add("emptyInput");
    setTimeout(() => {
      inputZ.classList.remove("emptyInput");
    }, 2000);
  } else {
    setVsFromMaterial();
    calculateN();
    calculateVf();
  }
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
