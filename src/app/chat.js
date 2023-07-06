"use client"

import "./chat.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MDBBtn, MDBRow } from "mdb-react-ui-kit";
import { MDBCol } from "mdb-react-ui-kit";
import { MDBCard } from "mdb-react-ui-kit";
import { MDBCardBody } from "mdb-react-ui-kit";
import { MDBTextArea } from "mdb-react-ui-kit";




  export default function Chat() {

    return (
      <div>
        <MDBRow className="d-flex">
          <MDBCol md="8" lg="5" xl="3">
            <MDBCard id="chat1" style={{ borderRadius: "5px", height: "20vw"}}>
              <MDBCardBody>

                <div className={"chatboxContent"}>
                <div className="d-flex flex-row justify-content-start mb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div
                    className="p-2 ms-3"
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "rgba(0, 118, 206, 0.3)",
                    }}
                  >
                    <p className="small mb-0">
                      Hello and thank you for visiting Dell Technologies!
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-start mb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div
                    className="p-2 ms-3"
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "rgba(0, 118, 206, 0.3)",
                    }}
                  >
                    <p className="small mb-0">
                      In a few words, please tell me what would you use your Dell device for.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-start mb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div
                    className="p-2 ms-3"
                    style={{
                      borderRadius: "5px",
                    }}
                  >
                    <MDBBtn className='optionBtn mx-2 m-1 text-capitalize'>Personal</MDBBtn>
                    <MDBBtn className='mx-2 m-1 text-capitalize optionBtn'>Gaming</MDBBtn>
                    <MDBBtn className='mx-2 m-1 text-capitalize optionBtn'>Work</MDBBtn>
                  </div>
                </div>
  
                <div className="d-flex flex-row justify-content-end mb-4">
                  <div
                    className="p-2 me-3 border"
                    style={{ borderRadius: "5px", backgroundColor: "#fbfbfb" }}
                  >
                    <p className="small mb-0">
                      Thank you, I really like your product.
                    </p>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>
                </div>
                <div className="chatboxResponseContainer">
                  <MDBTextArea
                    className="form-outline"
                    label="Type your message"
                    id="textAreaExample"
                    rows={1}
                  />
                  <div className="chatboxSendButton">
                    <MDBBtn className='sendBtn mx-2 m-1 text-capitalize'>Send</MDBBtn>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }