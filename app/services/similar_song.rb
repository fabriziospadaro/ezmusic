require 'json'

class SimilarSong
  def self.get(name,results = 25)
    response = RestClient.get("https://ws.audioscrobbler.com/2.0/?method=track.search&track="+name+"&limit=1&api_key=283eb42e49e8b0a3045c0c9edf3666bb&format=json", headers={})
    a = JSON.parse(response)
    name = a["results"]["trackmatches"]["track"][0]["name"]
    artist = a["results"]["trackmatches"]["track"][0]["artist"]
    response = RestClient.get("https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist="+artist+"&track="+name+"&limit=#{results}&api_key=283eb42e49e8b0a3045c0c9edf3666bb&format=json", headers={})
    a = JSON.parse(response)
    similartracks = []
    a["similartracks"]["track"].each do |i|
      similartracks << { name: i["name"], artist: i["artist"]["name"] }
    end
    return similartracks
  end
end
