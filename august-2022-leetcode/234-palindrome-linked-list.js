var isPalindrome = function(head) {
    let string1 = string2 = "";
    let node = head;
      while(head != null){
          string1 += head.val;
          string2 = `${head.val}${string2}`;
          head = head.next;
      }
      return string1 === string2;
      
  };