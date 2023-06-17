export class Api {
  constructor(url) {
    this.url = url;
  }
  async getData(from) {
    if (from) {
      const response = await fetch(this.url + "/" + from);
      const JSON = await response.json();
      return JSON;
    } else {
      const response = await fetch(this.url);
      const JSON = await response.json();
      return JSON;
    }
  }
  async getUserById(userId){
    const jsonObject = await this.getData("users/"+userId);
    return jsonObject;
  }
  async logData(from) {
    const jsonObject = await getData(from);
    console.log(jsonObject.data[1]);
  }
}
