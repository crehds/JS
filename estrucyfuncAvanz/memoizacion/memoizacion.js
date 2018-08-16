let cont = 0;
function fibo(num, storage={}) {
  cont++;
  if (storage[num]) return storage[num];
  if (num == 1) return 0;
  if (num == 2) return 1;
  return storage[num] = fibo(num - 1, storage)
                        + fibo(num - 2, storage);
}

//reduce las peticiones drasticamente , en comparacion
//a usar solo recursion
