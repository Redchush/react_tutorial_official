import ProfileService from "../../js/service/ProfileService";
import React from "react";
import Profile from "../../js/model/Profile";

describe("ProfileService", ()=> {
  let profile1;
  let profile2;

  beforeEach(()=>{
    profile1 = new Profile("p1", "alex", "X", 'blue');
    profile2 = new Profile("p2", "andy", "Y", 'blue');
  });

  it('get cells count', () => {
    let result = ProfileService.mapProfileToSign([profile1, profile2]);
    expect(result.get('X').id ).toEqual('p1');
  });
  }
);
