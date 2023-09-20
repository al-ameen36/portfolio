"use client";
import { useEffect, useState } from "react";
import bannerStyles from "./banner.module.scss";
import { AiFillGithub } from "react-icons/ai";

export default function Banner() {
  const [bio, setBio] = useState();
  const [roles, setRoles] = useState();
  const [links, setLinks] = useState();
  useEffect(() => {
    fetch("/api/bio")
      .then((res) => res.json())
      .then((data) => {
        setBio(data.data);
      });

    fetch("/api/roles")
      .then((res) => res.json())
      .then((data) => {
        setRoles(data.data);
      });

    fetch("/api/links")
      .then((res) => res.json())
      .then((data) => {
        setLinks(data.data);
      });
  }, []);
  useEffect(() => {
    console.log(bio);
    console.log(roles);
    console.log(links);
  }, [roles]);
  return (
    <header className={bannerStyles.banner}>
      <h1 className={bannerStyles.heading}>{bio?.name}</h1>
      {roles ? (
        <div className={bannerStyles.job_title}>
          <span>{roles[0].name}</span>
          <span className={bannerStyles.ampasand}>&</span>
          <span>{roles[1]?.name}</span>
        </div>
      ) : null}
      <div className={bannerStyles.actions}>
        <div className={bannerStyles.actions_top}>
          <a
            href={links?.find((link) => link.name === "linkedin").url}
            id={bannerStyles.contact_btn}
            className="btn"
          >
            contact me
          </a>
          <a href="" className="btn">
            download CV
          </a>
        </div>
        <span>or</span>
        <div>
          <a
            href={links?.find((link) => link.name === "github").url}
            className="btn"
          >
            <AiFillGithub /> github profile
          </a>
        </div>
      </div>
    </header>
  );
}
