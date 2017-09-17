class Api::SongsController < ApplicationController
  def index
    render json: Song.all
  end

  def create
    attrs = params.require(:song).permit(:artist, :rank)
    song = Song.new(attrs)
    if song.save
      render json: song
    else 
      render json: { errors: song.errors }, status: 422
    end
  end

  def update
    song = Song.find(params[:id])
    song.update
    render json: song
  end

  def destroy
    Song.find(params[:id]).destroy
  end
end
