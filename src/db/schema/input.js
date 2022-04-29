import mongoose from "mongoose";

//스키마 정의하기
const { Schema } = mongoose;

const inputSchema = new Schema({
  // input 파일에 대한 스키마 정의하기
  // https://mongoosejs.com/docs/guide.html  이거 참고해

  core: Number,
  task: Number,
});

//모델 정의하기
const inputModel = mongoose.model("inputModel", inputSchema);

//모듈 내보내기
// https://ko.javascript.info/import-export 참고해!
export default inputModel;