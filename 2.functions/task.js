
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (i = 0; i < [...arr].length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  for (i = 0; i < [...arr].length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  for (i = 0; i < [...arr].length; i++) {
    sum = sum + arr[i];
  }
  avg = Math.round((sum / [...arr].length) * 100) / 100;
  const minOne = arr.reduce((so, x) => so < x ? so : x, arr[0])
  const maxOne = arr.reduce((so, x) => so > x ? so : x, arr[0])
  const sumOne = arr.reduce((so, x) => so + x, 0)
  const avgOne = Math.round((sum / [...arr].length) * 100) / 100;
  

  return { min: min, max: max, avg: avg };
}


  function summElementsWorker(...arr) {
    let sum = 0;
  const summElementsWorker = (...arr) => arr.reduce((prev, x) => prev + x, 0)
  
    for (i = 0; i < [...arr].length; i++) {
      sum = sum + arr[i];
    }
  
    return sum;
  }
  
 
  function differenceMaxMinWorker(...arr) {
  
      let minOne = arr[0];
      let maxOne = arr[0];
    
      for (i = 0; i < [...arr].length; i++) {
        if (maxOne < arr[i]) {
          maxOne = arr[i];
        }
      }
    
      for (i = 0; i < [...arr].length; i++) {
        if (minOne > arr[i]) {
          minOne = arr[i];
        }
      }
      const min = (...arr) => arr.reduce((prev, x) => prev < x ? prev : x, minOne)
      const max =(...arr) => arr.reduce((prev, x) => prev > x ? prev : x, maxOne)
    
      return maxOne-minOne
    }

    function worker(arr) {
      let sum = 0; 
      for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    }
    
    function worker2(arr) {
      let min = arr[0], max = arr[0];
      for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
          min = arr[i];
        }
        else if(arr[i] > max) {
          max = arr[i];
        }
      }
      return { difference: Math.abs(max - min) };
      return Math.abs(max - min);
    }
   

    function makeWork (arrOfArr, func) {
      let max = func(arrOfArr[0]); 
       for(let i = 0; i < arrOfArr.length; i++) {
        if(max < func(arrOfArr[i])) {
          max = func(arrOfArr[i]);
          const maxWorkerResult = func(arrOfArr[i]);
          if (maxWorkerResult > max) {
            max = funcResult;
          }
        }
      }
      return { max: max } ;
      
    }



















