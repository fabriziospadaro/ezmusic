require 'nokogiri'
require 'open-uri'

class YoutubeScraper
  def self.scrape(name)
    #first convert in youtube query format
    name.gsub!(" ","+")
    name.gsub!("%","+")
    #get the document

    doc = Nokogiri::HTML(open("https://www.youtube.com/results?sp=EgIQAQ%253D%253D&search_query=#{name}"))
    l = doc.xpath('//h3/a')

    data = []
    l.each do |t|
      if(t["href"].include?("/watch?v="))
        hash = {}
        hash["name"] = t["title"]
        hash["url"] = t["href"].sub("/watch?v=","")
        data << hash
      end
    end

    return data
  end
end

