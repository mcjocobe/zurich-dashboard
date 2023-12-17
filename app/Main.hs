{-# LANGUAGE OverloadedStrings #-}
import Network.HTTP.Simple
import Control.Monad (when)
import qualified Data.ByteString.Lazy as B
import qualified Data.ByteString.Lazy.Char8 as C
-- import Text.JSON
-- import JsonParsing

--WRITE TO FILE
writeToFile :: IO ()
writeToFile = do 
    newContents <- simpleGet
    when (length newContents > 0) $
        writeFile "file.txt" newContents


-- SIMPLE GET
simpleGet :: IO(String)
simpleGet = do
    response <- httpLbs "https://openerz.metaodi.ch/api/calendar.json?zip=8047&types=cardboard&types=paper&start=2023-12-15&sort=date&offset=0&limit=20"
    let responseText = getResponseBody response
    return $ C.unpack responseText
-- CUSTOM REQUEST
-- request = setRequestMethod "GET"
--     $ setRequestHost "httpbin.org"
--     $ setRequestPath "/get"
--     $ defaultRequest

-- customRequest :: IO ()
-- customRequest = do
--     response <- httpLbs request
--     print (getResponseBody response)

-- data TramTimeTable = TimeTable
--     {
--         stationboard ::  {
--             0 :: {
--                stop :: {
--                 departure :: Timestamp
--                 departureTimestamp :: Integer
--                } 
--             }
--         }
--     } deriving (Show, Data, Typeable)

-- parseResponse :: a -> b
-- parseResponse = do
    -- decodeJSON aa :: TimeTable

main :: IO ()
main = do
    writeToFile
