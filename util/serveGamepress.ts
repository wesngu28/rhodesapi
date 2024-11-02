import mongoose from 'mongoose'
import Operator from '../models/operatorModel'
import { neuralConnect } from '../models/connect'
import dotenv from 'dotenv'

dotenv.config()
const updateOperatorLinks = async () => {
  try {
    await neuralConnect()
    console.log('Connected to MongoDB')

    const operators = await Operator.find()

    for (const operator of operators) {
      if (operator && operator.art) {
        operator.art = operator.art.map(artItem => {
          if (!artItem.originalLink && !artItem.link.includes('gamepress.gg/arknights/sites/arknights/files/')) {
            return artItem
          }

          const transformedOriginalLink = artItem.originalLink
            ? artItem.originalLink.replace(
                'gamepress.gg/arknights/sites/arknights/files/',
                'ak.gamepress.gg/sites/default/files/'
              )
            : artItem.link.replace(
                'gamepress.gg/arknights/sites/arknights/files/',
                'ak.gamepress.gg/sites/default/files/'
              )

          return {
            name: artItem.name,
            link: transformedOriginalLink,
            ...(artItem.line ? { line: artItem.line } : {}),
          }
        })

        await operator.save()
        console.log(`Updated art links for operator ${operator._id}`)
      }
    }
  } catch (error) {
    console.error('Error during update:', error)
  } finally {
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}

updateOperatorLinks()
