import React, { Component } from 'react';
import rang1 from '../image/Rang1.JPG';
import pong1 from '../image/Pong1.jpg';
import Header from './Header';
import '../App.css';
import act1 from '../image/Act1.png';

class Extraact extends Component {
  state = {
    path: '/',
  };

  render() {
    let userroute = this.state.path == '/';

    return (
      <div className="background">
        <div className="pagecontent">
          <h5>บ้านแรง</h5>
          <img src={rang1} width="50%" />
          <p>
            บ้านรับน้องกิจกรรมที่ผมทำแล้วรู้สึกชอบมากๆ
            บ้านแรงเป็นบ้านรับน้องครับ
            กิจกรรมรับน้องที่ว่านั้นจะถูกจัดขึ้นทุกๆปี ในช่วง ต้นเดือนสิงหาคม
            เพื่อนรับนิสิตใหม่เข้ามาเป็นน้องในรั้วจุฬาลงกรณ์มหาวิทยาลัย ทุกๆปี
            บ้านแรงจะรับน้องเข้ามาในบ้านมากกว่า 500 คน
            และต่อปีเราจะมีทีมงานที่ทำงานด้วยกันประมาน 100 คน
            ก่อนที่เราจะไปรับน้องในวันจริง
            เราก็จะต้องมีการเตรียมงานให้เรียบร้อยก่อน
            เตรียมความพร้อมเพื่อที่วันจริงทุกอย่างจะได้เป็นระบบ
            ซึ่งการเตียมการนั้น กินเวลาไปถึง2เดือนเลยครับ
            ซึ่ง2เดือนนี้เป็น2เดือนที่ สนุก และเหนื่อมากๆ
            เป็นกิจกรรมที่ผมรู้สึกคุ้มในช่วงปิดเทอมครับ
            การทำงานร่วมกับคนเยอะๆนั้นยาก เราต้องเรียนรู้ที่จะเข้าใจคน
            และเรียนรู้ที่จะสื่อสารอย่างมีประสิทธิภาพ
            มากไปกว่านั้นมันยังทำให้ผมได้เจอคนหลากหลายรูปแบบ
            สิ่งที่ได้จากกิจกรรมนี้คือทักษะทางด้านอารมณ์ล้วนๆเลยครับ
            ไม่ว่าจะเป็น ทักษะการทำงานร่วมกับผู้อื่น ทักษะการสื่อสาร
            ทักษะการเป็นผู้นำ ทักษะการตัดสินใจในเวลาคับขัน และความอดทนครับ
          </p>
        </div>
        <div className="pagecontent">
          <h5>ชมรมปิงปองวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</h5>
          <img src={pong1} width="50%" />
          <p>
            ผมได้ทำชมรมปิงปองที่มหาวิทยาลัยครับ สิ่งที่ผมได้ทำก็คือ
            ผมได้ทำทุกหน้าที่ที่อยู่ในชมรมเลย
            ด้วยความที่ผมเป็นนักกีฬาปิงปองอยู่เดิม
            ทำให้ตอนปีหนึ่งผมก็หากิจกรรมทำนั้นก็คือเข้าชมรม
            เพิ่มเริ่มตั่งแต่เป็นนักกีฬา Fresh game
            ไปจนถึงการเป็นประทานชมรมเลยครับ
            สิ่งที่ผมทำคือแรกๆก็ออกงานแข่งในนามของคณะ เข้าร่วมกิจกรรมต่างๆ
            พอชั้นปีสูงข้นก็เริ่มอยากแข่งน้อยลงและให้น้องแข่งมากขึ้น
            โดยผมหันมาทำทางด้าน การจัดการภายในชมรมแทน เริ่มจากการทำเสื้อ
            หาเงินเข้าชมรม และเมื่อถึงชั้นปี3
            ผมก็เป็นประธานชมรมและก็ได้เจอกับน้องๆในชมรม
            ในส่วนนี้กีฬาสอนให้เรามีน้ำใจนักกีฬา
            มากไปกว่านั้นมันสอนให้เรารู้จักความอดทน และระเบียบวินัย
            เพราะเราต้องซ้อมเป็นเวลา มีวินัยทั้งในสนามซ้อมและนอกสนาม
            ปิงปองอาจจะเป็นกีฬาเดี่ยว
            แต่ความลับที่หลายคนไม่เคยรู้คือการไปแข่งแบบเป็นคู่หรือไปกับทีมมันสนุกๆมากเลยๆครับ
            แลสุดท้ายสิ่งที่ชมรมให้ผมมากกว่ากีฬา
            คือการที่ได้ลองจัดการอะไรตั่งแต่ขึ้นเริ่มต้นจนจบ
            เรียกกได้ว่าตั่งแต่เขียนเอกสารเปิดโครง วางแผนการเงิน วางแผนกิจกรรม
            ทำทุกอย่างไปจนถึงปิดโครงและเบิกเงินออกมา
            สำหรับผมเป็นอีกหนึ่งกิจกรรมที่คุ้มมากๆ
            และผมอยู่กับมันทั้งชีวิตมหาลัยของผมเลยครับ
          </p>
        </div>
      </div>
    );
  }
}

export default Extraact;
