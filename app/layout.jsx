export default function LayOut({children}){
 metadata=[{
    title:"Nova_calc",
    description:"this is a responsive and useable application"
 }]
  return(
<html lang="en">

<body>
  <main>
    {children}
  </main>
</body>
</html>
  )
}