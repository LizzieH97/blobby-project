import React, { useEffect, useState } from "react";
import { supabase } from "./api-calls"; // Adjust the path as needed
import SignupForm from "./signup-form";

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
      <div className="log-grid">
        {logBook.map((entry, index) => {
          let createdAt = entry.created_at;
          let slicedCreatedAt = createdAt.slice(0, 10);

          return (
            <div className="window" key={index}>
              <div className="window__head">
                <div className="window__head-meta">
                  <p className="window__head-title">
                    {entry.name} | {slicedCreatedAt}
                  </p>
                </div>
                <div className="window__head-controllers">
                  <button className="window__head-button window__head-button--hide">
                    -
                  </button>
                  <button className="window__head-button window__head-button--exit">
                    x
                  </button>
                </div>
              </div>
              <div className="window__body">
                <div className="window__frame">{entry.message}</div>
              </div>
            </div>
          );
        })}
      </div>
      <SignupForm />
    </div>
  );
};

export default LogBook;
