"use strict";
const output = document.getElementById("key");
const generate = document.getElementById("generate");
const select = document.getElementById("select");
generate.addEventListener("click", () => {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  output.value = btoa(String.fromCharCode(...bytes));
  bytes.fill(0);
  generate.disabled = true;
  select.disabled = false;
  document.getElementById("status").textContent = "Key generated locally. Save it privately before closing this tab.";
});
select.addEventListener("click", () => {
  output.focus();
  output.select();
  output.setSelectionRange(0, output.value.length);
});
