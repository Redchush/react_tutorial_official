class ProfileService{
  getProfileBySign(profiles, sign){
    if(!sign){
      return;
    }
    return profiles.find((profile) => {return profile.sign === sign});
  }
}

export default new ProfileService()