import React, { Component } from 'react';
import Header from './Header';
import '../App.css';
import act1 from '../image/Act1.png';
import it1 from '../image/IT1.JPG';
import intern1 from '../image/Intern2.png';
import hobby1 from '../image/Hobby1.png';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="homebackground">
          <p>
            สวัสดีครับ ผมชื่อเอก กำลังเรียนคณะวิศวกรรมศาสตร์
            สาขาการออกแบบและการผลิตยานยนต์ ภาคอินเตอร์ฯ<br></br>
            ผมทำเว็บนี้ขึ้นมาเพื่อเก็บประวัติส่วนตัวของผม ผมไม่เคยทำมาก่อนเลย
            <br></br>
            ทั้งหมดนี้ถูกเขียนด้วย Java Script ครับ
          </p>
        </div>
        <div className="flex">
          <div className="flexbackground">
            <a href="/extraactivities">Summary of me</a>
            <a href="/extraactivities">
              <img
                src={act1}
                height="300px"
                href="/extraactivites"
                className="center"
              />
            </a>
            <p>เดี๋ยวเขียน</p>
          </div>

          <div className="flexbackground">
            <a href="/miniproj">Fullstack Project</a>
            <a href="/miniproj">
              <img
                src={it1}
                height="300px"
                href="/miniproj"
                className="center"
              />
            </a>
            <p>เดี๋ยวเขียน</p>
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
              <br></br>จะเสริมทักษะทางด้วนอารมณ์(Soft Skill)
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
              ส่วนนี้เป็นส่วนของโปรเจ็คที่เกี่ยวกับเทคโนโลยีสารสนเทศ (IT)
              <br></br>ถึงแม่ผมจะเรียนเกี่ยวกับยานยนต์เป็นส่วนใหญ๋
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
            <a href="/hobby">Hobby</a>
            <a href="/hobby">
              <img
                src={hobby1}
                height="300px"
                href="/hobbyaactivites"
                className="center"
              />
            </a>
            <p>
              กิจกรรมส่วนตัวต่างๆ ที่ผมชอบทำในเวลาว่าง ตอนแรกก็คิดว่า
              <br></br>ส่วนนี้มันไม่ได้สำคัญอะไร แต่พอลองคิดดูอีกทีลักษณะ
              <br></br>กิจกรรมที่เราทำมันก็สามารถบ่งบอกตัวจนเราได้เช่นกัน
            </p>
          </div>
        </div>
        <div className="footer">
          <p>Ekkawin Viriyapak</p>
        </div>
      </div>
    );
  }
}

export default Homepage;
