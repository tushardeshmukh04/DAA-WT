import './Footer1.css'

function Footer1() {
  return (
    <footer>
      <p style={{
          backgroundColor: "#f1f1f1",
          padding: "10px",
          
          fontSize: "14px",
          color: "#333",
          border: "1px solid #ccc",
          borderRadius: "5px",
      }}>&copy; All Rights Reserved BY ashwini chaudhari</p>
      <form action="">
        Name:
        <input type="text" placeholder='enter name' />
        E-mail:
        <input type="email" placeholder='Entr your email' />
        Feedback:
        <input type="text" placeholder='Give Your valuable feedback' />
      </form>
    </footer>
  );
}

export default Footer1;
