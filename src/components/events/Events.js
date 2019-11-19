import React, { useState, useEffect } from "react";
import BlockUi from "react-block-ui";
import { FaAngleDown } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "react-block-ui/style.css";

import "./Events.css";
import ServiceApi from "../../services/ServiceApi";
import Collapsible from "react-collapsible";
import toastr from "toastr";
import "toastr/build/toastr.css";

export function Events() {
  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchEvents() {
      const events = await ServiceApi.getEvents();
      console.log(events);
      setEvents(events);
      setLoading(false);
    }
    fetchEvents();
  }, []);

  const handleSignup = premium => {
    if (premium)
      toastr.error(
        "This event is for Premium members only, Please buy a membership plan"
      );
  };

  const renderEvents = events => {
    console.log(events);
    return (
      <div className="container">
        {events.map(evt => (
          <div className="card" key={evt.name}>
            {evt.premium && (
              <div class="ribbon">
                <span>Premium</span>
              </div>
            )}
            <div className="card__image-container">
              <img className="card__image" src={evt.image} alt="" />
            </div>

            <svg className="card__svg" viewBox="0 0 800 500">
              <path
                d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                stroke="transparent"
                fill="#333"
              />
              <path
                className="card__line"
                d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                stroke="pink"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
            <div>
              {evt.flag && (
                <img src={evt.flag} className="flag" alt="flag"></img>
              )}
            </div>
            <div className="card__content">
              <h3 className="card__title">{evt.name}</h3>
              <div>{evt.date}</div>
              <div>
                <MdLocationOn /> {evt.location}
              </div>
              <div className="deadline">
                {evt.deadline && "Deadline : " + evt.deadline}
              </div>
              <div>{evt.status}</div>
              {!evt.deadlinePast && (
                <span>
                  <button
                    class="buttonSignup"
                    style={{ verticalAlign: "middle" }}
                    onClick={() => handleSignup(evt.premium)}
                  >
                    <span>SignUp</span>
                  </button>
                </span>
              )}
              <span>
                <button class="button" style={{ verticalAlign: "middle" }}>
                  <span>Details </span>
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <ul>
        <li>
          <img src="images/logo.svg" className="logo" alt="logo" />
        </li>
        <li>
          <a href="#jobs">Jobs</a>
        </li>
        <li>
          <a className="active" href="#events">
            Events
          </a>
        </li>
        <li>
          <a href="#jobspipeline">Jobs Pipeline</a>
        </li>
        <li>
          <a href="#slack">Slack</a>
        </li>
        <li>
          <a href="#referral">Referral</a>
        </li>
        <li className="dropdown">
          <a href='#' className="dropbtn">
            More
            <FaAngleDown />
          </a>
          <div className="dropdown-content">
            <a href="#">Courses</a>
            <a href="#">Library</a>
          </div>
        </li>        
      </ul>
      <div>
        <BlockUi tag="div" blocking={loading}>
          <Collapsible trigger="Past Events" open={true}>
            {renderEvents(events.filter(evt => evt.past === true))}
          </Collapsible>
          <Collapsible trigger="Upcoming Events" open={true}>
            <Collapsible trigger="Hackathon" open={true}>
              {renderEvents(
                events.filter(
                  evt => evt.past === false && evt.type === "hackathon"
                )
              )}
            </Collapsible>
            <Collapsible trigger="Leap" open={true}>
              {renderEvents(
                events.filter(evt => evt.past === false && evt.type === "leap")
              )}
            </Collapsible>
            <Collapsible trigger="Mission" open={true}>
              {renderEvents(
                events.filter(
                  evt => evt.past === false && evt.type === "mission"
                )
              )}
            </Collapsible>
            <Collapsible trigger="Other" open={true}>
              {renderEvents(
                events.filter(
                  evt =>
                    evt.past === false &&
                    evt.type !== "mission" &&
                    evt.type !== "leap" &&
                    evt.type !== "hackathon"
                )
              )}
            </Collapsible>
          </Collapsible>
        </BlockUi>
      </div>
    </div>
  );
}
