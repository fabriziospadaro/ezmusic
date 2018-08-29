require 'nokogiri'
require 'open-uri'

class YoutubeScraper
  def self.scrape(name)
    #first convert in youtube query format
    name.gsub!(" ","+")
    #get the document

    doc = Nokogiri::HTML(open("https://www.youtube.com/results?search_query=#{name}"))
    l = doc.xpath('//h3/a')

    data = []
    l.each do |t|
      hash = {}
      hash["name"] = t["title"]
      hash["url"] = t["href"].sub("/watch?v=","")
      data << hash
    end

    count = 0
    doc.xpath('//ul').each do |j|
      if(j["class"] == "yt-lockup-meta-info" && !j.children[1].nil?)
        data[count]["views"] = j.children[1].text.split(" ")[0]
        count = count+1
      end
    end

    return data
  end
end
