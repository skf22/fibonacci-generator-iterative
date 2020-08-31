/*Function that generates a fibonacci sequence. 

Two parameter inputs: 

i) sequence = array comprising two numbers forming beginning of sequence); and 
ii) length = length of the output array. 

Solution is implemented iteratively via while loop.*/ 

fibonacci = (sequence, length) => {
  let n1 = sequence[0];
  let n2 = sequence[1];
  let nextVal; 
  let count = 2;

  while (count < length) {
    nextVal = n1 + n2;
    n1 = n2;
    n2 = nextVal;
    sequence.push(nextVal);
    count++;
  }
  return sequence;
}