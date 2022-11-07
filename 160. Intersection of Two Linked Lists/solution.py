    if headA == None or headB == None:
      return None

    firstPointer = headA
    secondPointer = headB
    
    while firstPointer != secondPointer:
      if firstPointer == None:
        firstPointer = headB
      else:
        firstPointer = firstPointer.next
      if secondPointer == None:
        secondPointer = headA
      else:
        secondPointer = secondPointer.next
    
    return firstPointer