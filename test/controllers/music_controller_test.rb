require 'test_helper'

class MusicControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get music_home_url
    assert_response :success
  end

end
