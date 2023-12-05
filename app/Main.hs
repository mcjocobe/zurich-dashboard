{-# LANGUAGE OverloadedStrings #-}
import Network.HTTP.Simple

-- SIMPLE GET

main :: IO ()
main = do
    response <- httpLbs "http://transport.opendata.ch/v1/stationboard?station=Siemens&limit=20"
    print (getResponseBody response)