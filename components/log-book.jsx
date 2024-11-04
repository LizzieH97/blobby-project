import React, { useEffect, useState } from "react";
import { supabase } from "./api-calls"; // Adjust the path as needed

const LogBook = () => {
  const [logBook, setLogBook] = useState([]);

  useEffect(() => {
    const fetchLogBook = async () => {
      const { data, error } = await supabase.from("Log-Book").select();
      if (error) {
        console.error("Error fetching log book:", error);
      } else {
        setLogBook(data);
      }
    };

    fetchLogBook();
  }, []);

  return (
    <div>
      {logBook.map((entry, index) => {
        let createdAt = entry.created_at;
        let slicedCreatedAt = createdAt.slice(0, 10);
        return (
          <ul key={index} className="log-book">
            <li className="grid-log-book-name">Name: {entry.Name}</li>
            <li className="grid-log-book-date">Created: {slicedCreatedAt}</li>
            <li className="log-book-message">{entry.Message}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default LogBook;
