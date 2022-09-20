export default Home = (userObj) => {
  
  const [attachment, setattachment] = useState("");
  useEffect(() => {

  })
  return (
    <div class="UserInfo">
      <div id="profile">
        <Profile />
      </div>
      <article>
        <span>{userObj.name}</span>
        <span>{userObj.birth}</span>
        <span>{userObj.FinalDate}</span>
        <span>{userObj.location}</span>
      </article>
    </div>
  )
}