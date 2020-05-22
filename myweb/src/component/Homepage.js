import React, { Component } from 'react';
import Header from './Header';
import '../App.css';
import act1 from '../image/Act1.png';
import it1 from '../image/IT1.JPG';
import intern1 from '../image/Intern2.png';
import startup1 from '../image/Startup1.jpg';
import { Button } from 'reactstrap';
import ReactGA from 'react-ga';

class Homepage extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  onClick = (e) => {
    switch (e.target.id) {
      case 'summary':
        return this.props.history.push({ pathname: '/summary' });
      case 'fullstack':
        return this.props.history.push({ pathname: '/miniproj' });
    }
  };

  render() {
    return (
      <div>
        <div className="homebackground">
          <p>
            สวัสดีครับ ผมชื่อเอก กำลังจะสำเร็จการศึกษาจากคณะวิศวกรรมศาสตร์
            จุฬาลงกรณ์มหาวิทยาลัย <br></br>สาขาการออกแบบและการผลิตยานยนต์
            ภาคอินเตอร์ฯ ผมทำเว็บนี้ขึ้นมา<br></br>เพื่อเก็บประวัติส่วนตัวของผม
            ผมไม่เคยทำมาก่อนเลย ทั้งหมดนี้ถูกเขียนด้วย Javascript ครับ
          </p>
          <p>*เว็ปนี้ผมออกแบบมาสำหรับ Desktop เท่านั้นนะครับ*</p>
        </div>
        <div className="flex">
          <div className="flexsum">
            <a href="/summary">Summary of me</a>
            <br></br>
            <Button onClick={this.onClick} color="warning" id="summary">
              Click to see summary of me
            </Button>
          </div>

          <div className="flexsum">
            <a href="/miniproj">Fullstack Project</a>
            <br></br>
            <Button onClick={this.onClick} color="warning" id="fullstack">
              Click to see my project
            </Button>
          </div>
        </div>
        <div className="flex">
          <div className="flexbackground">
            <a href="/extraactivities">Extra Activities</a>
            <a href="/extraactivities">
              <img
                src={act1}
                height="300px"
                href="/extraactivites"
                className="center"
              />
            </a>
            <p>
              ส่วนนี้เป็นส่วนกิจกรรมเสริมที่ผมทำขณะที่กำลังศึกษาอยู่ในรั้ว
              <br></br>จุฬาลงกรณ์มหาวิทยาลัยนะครับ กิจกรรมพวกนี้ส่วนใหญ่
              <br></br>จะเสริมทักษะทางด้kนอารมณ์(Soft Skill)
            </p>
          </div>

          <div className="flexbackground">
            <a href="/itproject">IT Project</a>
            <a href="/itproject">
              <img
                src={it1}
                height="300px"
                href="/extraactivites"
                className="center"
              />
            </a>
            <p>
              ส่วนนี้เป็นส่วนของโครงงานที่เกี่ยวกับเทคโนโลยีสารสนเทศ (IT)
              <br></br>ถึงแม้ผมจะเรียนเกี่ยวกับยานยนต์เป็นส่วนใหญ่
              <br></br>แต่มันก็มีส่วนเกี่ยวข้องกับเทคโนโลยี
              และทำให้ผมได้ต่อยอดมาถึงตรงนี้
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flexbackground">
            <a href="/internship">Internship</a>
            <a href="/internship">
              <img
                src={intern1}
                height="300px"
                href="/internship"
                className="center"
              />
            </a>
            <p>
              ส่วนนี้เป็นส่วนของประสบการณ์ที่ได้จากการฝึกงาน
              <br></br>ผมได้ฝึกงาน2 โดยรอบแรกฝึกตรงสาย
              <br></br>และอีกรอบฝึกงานการตลาดครับ
            </p>
          </div>

          <div className="flexbackground">
            <a href="/startup">Startup Experience</a>
            <a href="/startup">
              <img
                src={startup1}
                height="300px"
                href="/hobbyaactivites"
                className="center"
              />
            </a>
            <p>
              ส่วนนี้เป็นกิจกรรมที่เกี่ยวกับการทำกิจกรรมในเชิงธุรกิจต่างๆนะครับ
              <br></br>ผมรู้สึกว่านอกจากการที่เราได้ไปหาความรู้อื่นอกสายวิศวะ
              <br></br>เรายังได้ลองทำงานเป็นทีม และยังได้เรียนรู้จากคนรอบตัว
            </p>
          </div>
        </div>
        <div className="footer">
          <p>Ekkawin Viriyapak</p>
          <p>Email: ekkawin.v@gmail.com Tel: 087-500-5777</p>
        </div>
      </div>
    );
  }
}

export default Homepage;
