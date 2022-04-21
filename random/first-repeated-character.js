	/*
    Given a string, return the first recurring character in it, or null if there is no recurring 
    character.
    
    For example, given the string "acbdbac", return "b". Given the string "abcdef", return null.
  */


function fun(str) {
    let w = new Set();
    
    for(let i = 0; i <= str.length - 1; i++){
      let j = str[i]
      
      if (w.has(j))
        return j;        
      else
        w.add(j);
        
    }
  return null;
}
	
(() => {
    const assert = {
      equal: (actual, expected) => {
        if(expected !== actual) {
          console.log(`FAILED: Expected=${expected}, Actual=${actual}`);
        }
        else {
          console.log('OK');
        }
    }
  };

  assert.equal(fun(''), null);
  assert.equal(fun('aabb'), 'a');
  assert.equal(fun('acbbac'), 'b');
  assert.equal(fun('acbdbac'), 'b');
  assert.equal(fun('abcdec'), 'c');
  assert.equal(fun('abcdef'), null);
})();
