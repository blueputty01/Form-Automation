(() => {
  const key = "1121212212";
  const keyForKey = "✔❌";
  const keyLookup = [..."✔❌"];
  console.log(keyLookup);
  const human = getHuman(key, keyLookup);

  console.log(key);

  function getHuman(num, keyForKey) {
    //convert to ABCD type key
    let abcd = "";
    console.log(keyForKey);
    num.forEach((n) => {
      console.log(n);
      console.log(keyForKey[n]);
      abcd += keyForKey[n];
    });
    return abcd;
  }
})();
