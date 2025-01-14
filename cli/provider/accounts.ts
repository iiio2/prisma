import 'dotenv/config'
import { readFiles } from '../utils/filesystem'

export function getAccounts () {
  const backupPath = String(process.env.BACKUP_PATH)
  return readFiles(backupPath + '/accounts')
}
