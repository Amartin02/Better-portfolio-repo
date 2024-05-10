function Contact() {
  return (
    <div>
      <form action="#" method="POST">
        <input type="text" name="name" placeholder="Your Name" required></input>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        ></input>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        ></input>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default Contact;
