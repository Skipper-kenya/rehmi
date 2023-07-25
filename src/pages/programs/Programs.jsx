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
  const ChemContents = () => {
    return (
      <>
        <LinkInsert
          source="./Assets/chapter1.pdf"
          resourceName=" solved 9th Chemistry class Chapter 1"
        />
        <LinkInsert
          source="./Assets/chapter2.pdf"
          resourceName="solved 9th Chemistry class Chapter 2"
        />
      </>
    );
  };

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
        <TopSubInsert subject="Chemistry" links={ChemContents()} />
        <TopSubInsert subject="Biology" />
        <TopSubInsert subject="Physics" />
        <TopSubInsert subject="Mathematics" />
        <TopSubInsert subject="Urdu" />
        <TopSubInsert subject="Park Study" />
        <TopSubInsert subject="Islamyat" />
        <TopSubInsert subject="English" />
      </div>
    </div>
  );
};

const TopSubInsert = (props) => {
  return (
    <div className="subject">
      <div className="subTop">
        <h3>{props.subject}</h3>
        <span>
          <Plus size={20} />
        </span>
      </div>
      <div className="subBottom">
        <div className="botLinks">{props.links}</div>
      </div>
    </div>
  );
};

const LinkInsert = (props) => {
  return (
    <a href={props.source} download>
      <span>{props.source ? <FileDoc size={20} /> : null}</span>
      {props.resourceName}
    </a>
  );
};

export default Programs;
