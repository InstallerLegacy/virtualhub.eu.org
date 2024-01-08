---
title: Contact
description: Contact Us.
---
import styles from './contact.module.css';

# Contact

<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <div className={styles.formInner}>
    <div className={styles.hidden}>
        <p>Don’t fill this out if you’re human: </p>
        <input name="bot-field" />
    </div>
    <p>Your Name: </p>
    <input type="text" name="name" />
    <p>Your Email: </p>
    <input type="email" name="email" />
    <p>Message: </p>
    <textarea name="message" rows="5"></textarea>
    <button className={styles.greenButton} type="submit" id="btnSubmit">Submit</button>
  </div>
</form>

<div className="text--center container">
  <p>You can also chat with us on Discord:</p>
  <p>
    <a href="https://chat.virtualhub.eu.org">
      <img width="320" height="76" src="https://discordapp.com/api/guilds/1176107431013646357/widget.png?style=banner2" alt="Discord Banner"/>
    </a>
  </p>
</div>
