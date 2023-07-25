import React from "react";
import "./programs.css";
import {
  Book,
  FileDoc,
  FilePdf,
  GraduationCap,
  NotePencil,
  Plus,
} from "phosphor-react";

const Programs = () => {
  return (
    <div className="programsCont">
      <div className="topProg">
        <h3>Subjects Notes and Support Materials</h3>
        <div>
          <span>
            <GraduationCap size={40} />
            <Book size={40} />
            <NotePencil size={40} />
          </span>
        </div>
      </div>
      <div className="subjects">
        <Subject
          subject="Biology"
          source="./Assets/add.docx"
          resourceName="Biology test1"
        />
        <Subject subject="Chemistry" />
        <Subject subject="Physics" />
        <Subject subject="Mathematics" />
        <Subject subject="Urdu" />
        <Subject subject="Park Study" />
        <Subject subject="Islamyat" />
        <Subject subject="English" />
      </div>
    </div>
  );
};

const Subject = (props) => {
  return (
    <div className="subject">
      <div className="subTop">
        <h3>{props.subject}</h3>
        <span>
          <Plus size={20} />
        </span>
      </div>
      <div className="subBottom">
        <div className="botLinks">
          <a href={props.source} download>
            <span>{props.source ? <FileDoc size={20} /> : null}</span>
            {props.resourceName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Programs;
