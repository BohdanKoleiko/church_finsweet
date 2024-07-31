import React from "react";
import styles from "./Socials.module.scss";

interface ContactsProps {
   title: string;
   children?: React.ReactNode;
}

const Contacts = function (props: ContactsProps) {
   const { title, children } = props;

   return (
      <>
         <div className={styles.contactsTitle}>{title}</div>

         {children}
      </>
   );
};

export default Contacts;
