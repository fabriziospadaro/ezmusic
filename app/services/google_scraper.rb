require 'nokogiri'
require 'open-uri'

class GoogleScraper
  def self.scrape(name)
    #first convert in youtube query format
    name.gsub!(" ","+")

    doc = Nokogiri::HTML(open("https://www.google.it/search?safe=off&ei=AHKNW5vjMa2LlwTGloCADQ&q=songs+like#{name}"))
    data = []
    doc.xpath('//ol')[0].children[0].children[0].children[0].children.each do |item|
      data << item.text.sub(",","") if(item.text[0] != " ")
    end
    if(data.length > 3)
      return data
    else
      return ""
    end
  end
end
