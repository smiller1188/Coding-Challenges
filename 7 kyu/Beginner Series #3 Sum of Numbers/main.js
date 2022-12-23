function getSum( a,b )
{
 let min = Math.min(a, b)
 let max = Math.max(a, b)
 
 return (max - min + 1) * (max + min) / 2
}