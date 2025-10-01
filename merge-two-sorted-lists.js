/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  //create placeholder node 
    const dummy = new ListNode(-Infinity);
  
  //this will point to what was last merged in the list 
    let previous = dummy

  //while there's something in both list 
  while(list1 && list2) { 
    //if the value of list1 is less than or equal to value of list2 
    if(list1.val <= list2.val){ 
      
      //attaching: connect the node from list1 to the merged list 
      previous.next = list1; 
      
      //previous is moved the most recent additing of the merged list 
      previous = list1; 

      //move list1 to the next node so we can compare again
      list1 = list1.next; 
    } else { 

      //same steps but now if list2 was less or equal than list1
      previous.next = list2; 
      previous = list2; 
      list2 = list2.next
        }
    }
  // only one will have remainder and this will attach the remainder 
    if(!list1) previous.next = list2;
    if(!list2) previous.next = list1;

  //returning merged list
    return dummy.next;
};
